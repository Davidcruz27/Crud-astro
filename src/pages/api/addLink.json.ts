import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	const data = await request.json();

	if (!data.isRead) {
		data.isRead = false;
	}

	if (data.rating === "") {
		data.rating = null;
	}


	try {
		const res = await fetch("http://localhost:3000/links", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const dbRes = res.json();
	} catch (e) {
		console.error(e);
		return new Response(JSON.stringify({ message: e }));
	}

	return new Response(
		JSON.stringify({
			message: "¡Esto es un POST!",
		})
	);
};
