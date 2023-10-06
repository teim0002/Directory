function list(clients)
{
    let html = '';

    for(let i = 0; i < clients.length; i++)
    {
        html += `<li class="list-group-item d-flex justify-content-between" data-index="${clients[i].index}">
            ${clients[i].name}
            <strong>$ ${clients[i].balance}</strong>
          </li>`;
    }

    return html;
}


function order(clients, sortType)
{
    clients.sort(
                function(a,b)
                {
                    let first   = a[sortType];
                    let second  = b[sortType];

                    return first < second ? -1 : first > second ? 1 : 0;
                });

    return clients;
}



function total(clients)
{
    let total = 0;

    for(let i = 0; i < clients.length; i++)
    {
        total += clients[i].balance;
    }

    return total;
}


function search(queryString)
{
    let filteredClients = clients.filter(
                                function(current)
                                {
                                    if(current.name.toLowerCase().includes(queryString.toLowerCase()))
                                    {
                                        return true;
                                    }
                                    else
                                    {
                                        return false;
                                    }
                                });

    return filteredClients;
}

function info(indexValue)
{
    for(let i = 0; i < clients.length; i++)
    {
        if(clients[i].index === indexValue)
        {
            return clients[i];
        }
    }
}



