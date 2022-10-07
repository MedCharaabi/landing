import { useCreateContext } from '../create-context';
import { reducer, initialState } from './app.reducer';

// eslint-disable-next-line react-hooks/rules-of-hooks
const [state, useDispatch, provider] = useCreateContext(initialState, reducer);
// export const useStickyState = state;
// export const useStickyDispatch = useDispatch;
export const StickyProvider = provider;
