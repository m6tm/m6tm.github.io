// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace App {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		interface Platform {
			env: {
				DATABASE_URL: string;
				DIRECT_URL: string;
				PUBLIC_SUPABASE_URL: string;
				PUBLIC_SUPABASE_ANON_KEY: string;
				SUPABASE_SERVICE_ROLE_KEY: string;
			};
		}
	}
}

export {};
