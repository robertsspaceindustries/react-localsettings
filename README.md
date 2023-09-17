# react-localsettings
React's useState integrated with the localStorage API

## Using react-localsettings
```js
import useLocalSettings from "@robertsspaceindustries/react-localsettings";

/*
    react-localsettings stores your settings in one localStorage item, you can change the name of this item in the 3rd parameter
    the 1st parameter, settingName, is the name of the setting
    the 2nd parameter, settingValue, is the default value of the setting if not defined in localStorage
*/
const [state, setState] = useLocalSettings(settingName, settingValue, localStorageItem)
```
Note: react-localsettings saves your setting every time you set the state of it