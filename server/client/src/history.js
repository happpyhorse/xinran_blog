// we create browser history object ourselves, instead of letting browserrouter create it
// because we want to use history object in action creator
import { createBrowserHistory } from 'history';

export default createBrowserHistory();