import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export const [isAdmin, setIsAdmin] = createSignal(false);

export const useAdmin = () => [isAdmin, setIsAdmin];