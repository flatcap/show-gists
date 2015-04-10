var user = 'flatcap';

function repo_sort (a, b)
{
	return (a.created_at > b.created_at);
}

$(document).ready (function() {
	var table = $('#table');

	$.ajax ({
		dataType: "json",
		url: 'https://api.github.com/users/'+user+'/repos',

		success: function (json) {
			var repos = [];
			$.each (json, function (index, repo) {
				repos.push (repo);
			});
			repos.sort (repo_sort);

			$.each (repos, function (index, repo) {
				if (repo.fork) {
					return true;
				}
				var desc = repo.description.replace (/https*:\/\/.+/g, "<a href=\"$&\">$&</a>"); 

				var row = '';
				row += '<td>' + repo.created_at.substr(0,10) + '</td>';
				row += '<td><a href="' + repo.html_url + '">' + repo.name + '</a></td>';
				row += '<td>' + desc + '</td>';

				table.append ('<tr>'+row+'</tr>');
			});
		},
		error: function (jq, jqStatus, jqError) {
			alert ('error');
		}
	});

});

