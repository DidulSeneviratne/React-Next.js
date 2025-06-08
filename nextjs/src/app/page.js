import Image from "next/image";

export default function Home() {
  async function submitForm(formData){
    "use server";
    const formFeilds = {
      email: formData.get("email"),
      message: formData.get("message")
    };
    console.log("formFeilds", formFeilds);
    console.log(
      "TODO: Send these form field values to a backend"
    );
    return formFeilds;
  }
  return (
    <main class="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-black font-bold text-center md-6">Hello Motherfuckers!</h1>
      <form class="space-y-4" action={submitForm}>
        <div>
          <lable htmlFor="email" class="block text-sm font-medium text-gray-700">Email</lable>
          <input id="email" type="email" name="email" required class="border border-gray-300 focus:ring-2 foucs:ring-blue-500 focus:border-blue-500"/>
        </div>
        <div>
          <lable htmlFor="message" class = "block text-sm font-medium text-gray-700">Message</lable>
          <textarea id="message" required name="message" rows="4" class="text-black border border-gray-300 focus:ring-2 foucs:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
        <button type="submit" class = "text-white bg-blue-600 rounded-md p-3">Send Message</button>
      </form>
    </main>
  );
}
