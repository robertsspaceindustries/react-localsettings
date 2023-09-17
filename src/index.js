import { useState, useEffect } from "react";

/**
 * @param {string} name The name of this setting
 * @param {any} defaultValue The default value for this setting
 * @param {string} localStorageItem The name of the localStorage item, settings are saved in here
 * @returns {[any, import("react").SetStateAction]}
 */
export default function useLocalStorage(name, defaultValue, localStorageItem) {
	localStorageItem = localStorageItem ?? "react-localsettings";

	const [state, setState] = useState(defaultValue ?? "");

	useEffect(() => {
		const storedSettings = JSON.parse(localStorage.getItem(localStorageItem) ?? "{}");
		if (storedSettings[name]) {
			setState(storedSettings[name]);
		}
	});

	/**
	 * @param {any} value
	 */
	function newSetState(value) {
		setState(value);

		let storedSettings = JSON.parse(localStorage.getItem(localStorageItem) ?? "{}");
		storedSettings[name] = value;
		localStorage.setItem(JSON.stringify(storedSettings));
	}

	return [state, newSetState];
}
