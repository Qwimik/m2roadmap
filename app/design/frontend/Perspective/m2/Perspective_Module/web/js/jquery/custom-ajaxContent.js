define(['jquery', 'collapsible'], ($) => {
    return function (config, element) {
        $(element).collapsible({
            openedState: "active",
            active: false
        });
        $(element).on('click', () => {
            const content = $('#pokemon-content')[0];
            content.innerHTML = '<p>Loading...</p><div style="width: 100px; height: 100px"></div>';
            const randomNumber = () => {
                return Math.floor(Math.random() * 100) + 1;
            }

            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${randomNumber()}`,
                dataType: 'json',
                success: function (res) {
                    console.log(res);
                    content.innerHTML = `
                        <p>${res.name}</p>
                        <img src="${res?.sprites?.front_default}" alt="${res.name}" width="100" height="100"/>
                    `
                },
                error: function (err) {
                    console.log(err);
                }
            });
        })
    }
});
