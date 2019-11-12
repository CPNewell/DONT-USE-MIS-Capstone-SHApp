import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigateAndReset(routeName, params) {
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName,
                    params,
                }),
            ],
        })
    );
}

// add other navigation functions that you need and export them

export default {
    setTopLevelNavigator,
    navigateAndReset,
};