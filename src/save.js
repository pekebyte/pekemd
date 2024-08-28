
/**
 * WordPress dependencies
 */
import { RawHTML } from '@wordpress/element';

/**
 * External libraries
 */

const showdown  = require('showdown');

export default function save({attributes}) {
	
	const convertMD = (text) => {
		const converter = new showdown.Converter();
		return converter.makeHtml(text);
	};

	return (
		<RawHTML>{ convertMD(attributes.content) }</RawHTML>
	);
}
