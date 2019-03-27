/*
JS Script to update writer UI given:

 data = {
    'keyword': <input of user from the searh page>
    'phrases': <cause/problem/effect>
}
*/

function update_writer(data){

	var d = new Date();

	$('.title').text(data['keyword'])
	$('.sub-title-text').text(`Created at ${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`)
	$('.div-content').empty()


	texts = [data['keyword']].concat(data['phrases'])
	httpPostAsync(comments={'keyword':texts}, url=POST_WRITER_URL, 
		callback=function(data){

		data = JSON.parse(data)['data']
		//console.log(data)

		data.forEach(function(d){
			add_header(d['keyword'])
			add_paragraph(d['text'].join(' '))
		})
		});
}

function add_header(text){
	$('.div-content').append(`<b class='text-capitalize'> ${text} </b>`)
}

function add_paragraph(text){
	$('.div-content').append(`<p> ${text} </p>`)
}

