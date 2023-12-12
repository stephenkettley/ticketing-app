import { NextReponse } from "next/server";
import Ticket from "../(models)/Ticket";

// create a new ticket
export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextReponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    return NextReponse.json({ message: "Error", error }, { status: 500 });
  }
}
