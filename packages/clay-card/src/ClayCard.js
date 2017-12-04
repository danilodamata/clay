import 'clay-checkbox';
import 'clay-dropdown';
import 'clay-label';
import 'clay-link';
import 'clay-sticker';
import Component from 'metal-component';
import defineWebComponent from 'metal-web-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

import templates from './ClayCard.soy.js';

/**
 * Metal ClayCard component.
 */
class ClayCard extends Component {}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
ClayCard.STATE = {
	/**
	 * Actions in the dropdown on card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?array|undefined}
	 * @default undefined
	 */
	actionItems: Config.arrayOf(
		Config.shapeOf({
			label: Config.string().required(),
			separator: Config.bool().value(false),
			url: Config.string(),
		})
	),

	/**
	 * Flag to indicate if the card is disabled or not.
	 * @instance
	 * @memberof ClayCard
	 * @type {?bool|undefined}
	 * @default false
	 */
	disabled: Config.bool().value(false),

	/**
	 * CSS classes to be applied to the element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	elementClasses: Config.string(),

	/**
	 * Type of the file represented in the card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	fileType: Config.string(),

	/**
	 * Style of type of the file represented in the card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string}
	 * @default primary
	 */
	fileTypeStyle: Config.oneOf([
		'danger',
		'dark',
		'info',
		'light',
		'primary',
		'secondary',
		'success',
		'warning',
	]).value('primary'),

	/**
	 * Render ClayIcon in the background element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	icon: Config.string(),

	/**
	 * Id to be applied to the element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	id: Config.string(),

	/**
	 * Alt the image.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageAlt: Config.string(),

	/**
	 * The src to be applied to the background or user card image.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	imageSrc: Config.string(),

	/**
	 * Name to be applied to the input element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputName: Config.string(),

	/**
	 * Value to be applied to the input element.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	inputValue: Config.string(),

	/**
	 * Labels of the card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?array|undefined}
	 * @default undefined
	 */
	labels: Config.arrayOf(
		Config.shapeOf({
			label: Config.string(),
			style: Config.oneOf([
				'danger',
				'info',
				'secondary',
				'success',
				'warning',
			]).value('secondary'),
		})
	),

	/**
	 * Flag to indicate if the card is selectable or not.
	 * @instance
	 * @memberof ClayCard
	 * @type {?bool|undefined}
	 * @default false
	 */
	selectable: Config.bool().value(false),

	/**
	 * Flag to indicate if the card is selected or not.
	 * @instance
	 * @memberof ClayCard
	 * @type {?bool|undefined}
	 * @default false
	 */
	selected: Config.bool().value(false),

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @instance
	 * @memberof ClayCard
	 * @type {!string}
	 * @default undefined
	 */
	spritemap: Config.string(),

	/**
	 * Subtitle of the card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	subtitle: Config.string(),

	/**
	 * Title of the card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string|undefined}
	 * @default undefined
	 */
	title: Config.string(),

	/**
	 * Transform title in the url.
	 * @instance
	 * @memberof ClayCard
	 * @type {?string}
	 * @default undefined
	 */
	url: Config.string(),

	/**
	 * Variant of card.
	 * @instance
	 * @memberof ClayCard
	 * @type {?array|undefined}
	 * @default image
	 */
	variant: Config.oneOf(['image', 'file', 'user']).value('image'),
};

defineWebComponent('clay-card', ClayCard);

Soy.register(ClayCard, templates);

export {ClayCard};
export default ClayCard;
