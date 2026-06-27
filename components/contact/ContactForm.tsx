"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { type ContactState, sendContactEmail } from "@/app/contact/actions";

const initialState: ContactState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  return (
    <form
      action={formAction}
      className="space-y-6 self-start rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black"
        />
      </div>

      {/* Honeypot field for spam bots — visually hidden, ignored by humans */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <SubmitButton />

      {state.status !== "idle" && (
        <p
          role="status"
          className={`text-sm ${
            state.status === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
