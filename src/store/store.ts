import type { Project } from '$lib/types';
import { writable, type Writable } from 'svelte/store';

export const projects: Writable<Array<Project>> = writable([]);
export const formModal = writable(false);
