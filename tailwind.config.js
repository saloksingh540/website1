module.exports = {
    mode: 'jit',
    content: ["./**/**.{php, js}"],
    theme: {
        extend: {
        fontFamily: {
            nunito: ['Nunito Sans', 'sans'],
            // olivera: ['Olivera Regular'],
            times: ['Times New Roman']
        },
        colors:{
            'primary': '#15141a',
            'action': '#E5007E',
        },
        backgroundColor: {
            'primary': '#15141a',
            'action': '#E5007E',
        },
        height:{
            '70pc': '70%',
        },
    },
    },
    plugins: [],
} 