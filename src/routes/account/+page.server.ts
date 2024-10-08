import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, "/login");
	}

	const { firstName, lastName, email } = locals.user;

	return {
		user: {
			firstName,
			lastName,
			email
		}
	};
};
