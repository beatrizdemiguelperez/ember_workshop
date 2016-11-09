import Ember from 'ember';
const { Controller, observer } = Ember;

const languages = [
	{ name: 'ES', code: 'es'},
	{ name: 'ENG', code: 'en'}
];

export default Controller.extend({

	i18n: Ember.inject.service(),

	languages,

	isMenuOpened: false,

	selectedLanguage: languages[0],

	onSelectedLanguageChange: observer('selectedLanguage', function(){
		this.set('i18n.locale', this.get('selectedLanguage.code'));
	}),

	actions: {
		toggleMenu(){
			this.toggleProperty('isMenuOpened');
		}
	}
});
