"use server";

export async function sendMessage(formData: FormData) {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");

  if (!name || !email || !message) return;

  console.log("New contact message:", { name, email, message });
}
