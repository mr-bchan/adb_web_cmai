/*
Function to:
 a. search for cause/effects on ADB API given a keyword
 b. update UI via jQuery

@inputs:
  keyword: keyword coming from the user - (selected problem)
*/

function update_cause_effect(keyword){
	console.log('Input keyword received: ' + keyword)

	var input_json = {
			"text" : keyword,
			"type" : "cause_effect"
		}
	
	httpPostAsync(comments=input_json, url=POST_PROBLEM_URL, 
		callback=function(data){
			data = JSON.parse(data)

			var results = data['data']['data']

			// Limit results to N only
			results = results.slice(0, 15);

			/*
		    <div class="tab-pane active" id="tab-all">
		        <p><span class="tab-selected-count">0</span> selected item(s)</p>
				
				<div class="tab-pane-list">
				<h5 class="search-result-item-title"><i class="far fa-circle"></i>Deforestration</h5>
				<div class="search-result-item-details">
				    <div class="mb-3">
				        <a href="#" class="a-provided-by">Source: Provided by User</a>
				    </div>
				</div>
				</div>

				...
				...
			*/
				$('#tab-all > .tab-pane-list').remove()
				$('#tab-cause > .tab-pane-list').remove()
				$('#tab-effect > .tab-pane-list').remove()
				
				$('#tab-all > .py-4').remove()
				$('#tab-cause > .py-4').remove()
				$('#tab-effect > .py-4').remove()
				
				results.forEach(function(result){
				div_html = 
					   `<div class="tab-pane-list">
						<h5 class="search-result-item-title text-capitalize"><i class="far fa-circle"></i>${result.text}</h5>
						<div class="search-result-item-details">
						    <div class="mb-3">
						        <a href="${result.link}" target="_blank" class="a-provided-by">Source: ${result.source}</a>
						    </div>
						</div>
						</div>`
				
				$("#tab-all").append(div_html)
				$(`#tab-${result.type}`).append(div_html)
			})

			  	empty_html = `<div class="text-center py-4">
		                        <p>No Record</p>
		                        <p>Please select on the problem to view list</p>
		                    </div>`

		        // Add empty details if no divs found

		        $('.count')[0].textContent = $('#tab-all > .tab-pane-list').length
		        if($('#tab-all > .tab-pane-list').length == 0){
		        	$('#tabl-all').append(empty_html)
		        }

		        $('.count')[1].textContent = $('#tab-cause > .tab-pane-list').length
		        if($('#tab-cause > .tab-pane-list').length == 0){
		        	$('#tabl-cause').append(empty_html)
		        }

				$('.count')[2].textContent = $('#tab-effect > .tab-pane-list').length
		        if($('#tab-effect > .tab-pane-list').length == 0){
		        	$('#tabl-effect').append(empty_html)
		        }

	}) // end-of-httpPostAsync
}