import { NextRequest, NextResponse } from "next/server";
import { getBotReply } from "@/lib/chatbotEngine";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "A message is required." }, { status: 400 });
    }

    // Answers are generated from lib/chatbotEngine.ts + lib/chatbotData.ts —
    // a fast, no-external-API keyword matcher tied to our own courses/contact
    // data. To upgrade this to a full LLM-powered bot later, replace the
    // getBotReply() call below with a call to your model provider of choice,
    // passing `message` (and optionally the BOT_COURSES/BOT_CONTACT/BOT_FAQS
    // data from chatbotData.ts as context).
    const reply = getBotReply(message);

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong answering that. Please try again." },
      { status: 500 }
    );
  }
}
