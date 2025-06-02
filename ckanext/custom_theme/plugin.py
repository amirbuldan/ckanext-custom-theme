import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit
import ckanext.custom_theme.helpers as Helpers

class CustomThemePlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)

    # IConfigurer

    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('assets',
            'custom_theme')
    
    #ITemplateHelpers
    def get_helpers(self):
        return {
            'dataset_list': Helpers.dataset_list
        }
