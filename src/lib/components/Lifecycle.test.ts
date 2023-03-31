import { render } from '@testing-library/svelte';
import { expect, it } from 'vitest';
import Lifecycle from './Lifecycle.svelte';

it('works', async () => {
	const { component, getByTestId } = render(Lifecycle, { props: { name: 'World' } });
	// await act();

	// component.$$.update();

	// component.$$.after_update.forEach((f) => f());

	// await act();
	expect(getByTestId('before')).toBeTruthy();
	expect(getByTestId('mounted')).toBeTruthy();
	expect(getByTestId('after')).toBeTruthy();
});
