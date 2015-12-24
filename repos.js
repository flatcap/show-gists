var user = 'flatcap';

function repo_sort (a, b)
{
	return (a.created_at > b.created_at);
}

$(document).ready (function() {
	var repos_table = $('#repos_table');

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

				repos_table.append ('<tr>'+row+'</tr>');
			});
		},
		error: function (jq, jqStatus, jqError) {
			alert ('error');
		}
	});

	var neomutt_table = $('#neomutt_table');

	$.ajax ({
		dataType: "json",
		url: 'https://api.github.com/users/neomutt/repos',

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

				neomutt_table.append ('<tr>'+row+'</tr>');
			});
		},
		error: function (jq, jqStatus, jqError) {
			alert ('error');
		}
	});

	var gists_table = $('#gists_table');

	$.ajax ({
		dataType: "json",
		url: 'https://api.github.com/users/'+user+'/gists',

		success: function (gists) {
			var repos = [];
			$.each (gists, function (index, repo) {
				repos.push (repo);
			});
			repos.sort (repo_sort);

			$.each (repos, function (index, repo) {
				var files = [];
				$.each (repo.files, function (name, obj) {
					files.push (name);
				});

				var desc = repo.description.replace (/https*:\/\/.+/g, "<a href=\"$&\">$&</a>");

				var row = '';
				row += '<td>' + repo.created_at.substr(0,10) + '</td>';
				row += '<td><a href="' + repo.html_url + '">' + repo.id + '</a></td>';
				row += '<td>' + files.join(', ') + '</td>';
				row += '<td>' + desc + '</td>';

				gists_table.append ('<tr>'+row+'</tr>');
			});
		},
		error: function (jq, jqStatus, jqError) {
			alert ('error');
		}
	});
});

