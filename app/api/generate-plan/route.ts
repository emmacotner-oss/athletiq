import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const systemPrompt = `You are a certified sports performance coach and strength & conditioning specialist. Generate a detailed, structured weekly workout plan based on the user's inputs.

Rules:
- Include sport-specific drills AND complementary strength/conditioning exercises
- Each workout day should have 5-7 exercises
- Balance skill work with physical conditioning
- Scale difficulty based on experience level
- Include proper warm-up and cooldown recommendations
- Provide realistic sets, reps, and rest periods

Respond ONLY with valid JSON in this exact format, no markdown, no backticks, no explanation:

{
  "title": "Sport – Primary Goal Plan",
  "weeks": 8,
  "days": [
    {
      "day": "Day 1 – Focus Area Name",
      "exercises": [
        {
          "name": "Exercise name",
          "sets": "4",
          "reps": "12",
          "rest": "60s"
        }
      ]
    }
  ],
  "tips": [
    "Tip 1",
    "Tip 2",
    "Tip 3"
  ]
}`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sport, goals, daysPerWeek, experience } = body;

    if (!sport || !goals || !daysPerWeek || !experience) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      );
    }

    const userMessage = `Create a workout plan with these details:
- Sport: ${sport}
- Goals: ${goals.join(', ')}
- Days per week: ${daysPerWeek}
- Experience level: ${experience}`;

    const fullPrompt = `${systemPrompt}\n\n${userMessage}`;

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('No response from Gemini');
    }

    // Clean up the response - remove markdown code blocks if present
    let cleanedText = text.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/```\n?/g, '');
    }

    // Parse the JSON response
    const plan = JSON.parse(cleanedText);

    return NextResponse.json(plan);
  } catch (error) {
    console.error('Error generating plan:', error);
    return NextResponse.json(
      { error: 'Failed to generate workout plan' },
      { status: 500 }
    );
  }
}
