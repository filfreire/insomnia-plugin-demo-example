// For help writing plugins, visit the documentation to get started:
//   https://docs.insomnia.rest/insomnia/introduction-to-plugins

// TODO: Add plugin code here...

module.exports.workspaceActions = [{
    label: 'Console log the context and models',
    icon: 'fa-star',
    action: async (context, models) => {
        console.log('Console log the context and models - plugin!!!!');
        console.log(context);
        console.log(models);
    },
},
{
    label: 'Get proto files via export',
    icon: 'fa-star',
    action: async (context, models) => {
        console.log('Get Proto files!');
        const ex = await context.data.export.insomnia({
            includePrivate: false,
            format: 'json',
            workspace: models.workspace,
        });
        const insomnia_data = JSON.parse(ex);
        const proto_files = insomnia_data.resources.filter((element) => {
            if (element._type == "proto_file") {
                return element;
            }
        });
        console.log(proto_files);
    },
}];