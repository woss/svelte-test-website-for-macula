import { error, redirect } from '@sveltejs/kit';

export function load(event: any) {
  throw redirect(307, '/');

}