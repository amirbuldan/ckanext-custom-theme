import ckan.plugins.toolkit as toolkit


def dataset_list():
    ''' Return Dataset List '''

    dataset_list = []
    # datasets = toolkit.get_action('package_list')(context={}, data_dict={'limit': 5})
    datasets = toolkit.get_action('package_list')(context={}, data_dict={'limit': 5})
    for dt in datasets:
        dataset_meta = toolkit.get_action('package_show')(context={}, data_dict={'id': dt})
        dataset_list.append(dataset_meta)

    # print('get action dataset : ', datasets)
    # print('get action dataset show : ', dataset_list)
    return dataset_list

def latest_dataset_list():
    ''' Return Dataset List '''

    dataset_list = []
    # datasets = toolkit.get_action('package_list')(context={}, data_dict={'limit': 5})
    datasets = toolkit.get_action('package_search')(context={}, data_dict={'rows': 5})
    print('dataset terbaru: ')
    print(datasets)
    return datasets['results']
