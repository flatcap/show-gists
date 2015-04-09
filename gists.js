// var url = 'https://api.github.com/users/flatcap/gists';
var url = 'flatcap.json';

function repo_sort (a, b)
{
	return (a > b);
	return 0;
	// if (a.name_short > b.name_short) {
	// 	return 1;
	// } else if (a.name_short < b.name_short) {
	// 	return -1;
	// } else {
	// 	return 0;
	// }
}

$(document).ready (function() {
	var list = $ ('#list');

	$.ajax ({
		dataType: "json",
		url: url,
		success: function (gists) {
			var files = [];
			$.each (gists, function (index, repo) {
				$.each (repo.files, function (filename, obj) {
					files.push (filename);
				});

			});
			files.sort (repo_sort);
			$.each (files, function (index, file) {
				list.append ('<li>' + file + '</li>');
			});
		},
		error: function (jq, jqStatus, jqError) {
			alert ('error');
		}
	});

});

