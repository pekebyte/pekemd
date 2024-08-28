
/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n';
import { useContext, useState } from '@wordpress/element';
import { useBlockProps, PlainText, BlockControls } from '@wordpress/block-editor';
import { ToolbarButton, Disabled, ToolbarGroup, VisuallyHidden } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Preview from './preview';

/**
 * External libraries
 */

const showdown  = require('showdown');

    
export default function Edit ({attributes, setAttributes, isSelected, instanceId}) {
	const [ isPreview, setIsPreview ] = useState();
	const isDisabled = useContext( Disabled.Context );

	const convertMD = (text) => {
		const converter = new showdown.Converter();
		return converter.makeHtml(text);
	};

	const switchToPreview  = () => {
		setIsPreview( true );
	}

	const switchToHTML = () => {
		setIsPreview( false );
	}

	const blockProps = useBlockProps( {
		className: 'block-library-html__edit'
	} );

	return (
		<div { ...blockProps }>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						isPressed={ ! isPreview }
						onClick={ switchToHTML }
					>
						{ __( 'Markdown' ) }
					</ToolbarButton>
					<ToolbarButton
						isPressed={ isPreview }
						onClick={ switchToPreview }
					>
						{ __( 'Preview' ) }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			{ isPreview || isDisabled ? (
				<>
					<Preview
						content={ convertMD(attributes.content) }
						isSelected={ isSelected }
					/>
					<VisuallyHidden id={ instanceId }>
						{ __(
							'Preview is not yet fully accessible. Please switch screen reader to virtualized mode to navigate the below iFrame.'
						) }
					</VisuallyHidden>
				</>
			) : (
				<PlainText
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
					placeholder={ __( 'Markdown...' ) }
					aria-label={ __( 'Markdown' ) }
				/>
			) }
		</div>
	);
}