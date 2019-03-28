/*
Function to:
 a. search for problems on ADB API given a keyword
 b. update UI via jQuery

@inputs:
  keyword: keyword coming from the user - (searchbox value)
*/

function update_problems(keyword){
	console.log('Input keyword received: ' + keyword)

	var input_json = {
			"text" : keyword,
			"type" : "problem"
		}
	
	httpPostAsync(comments=input_json, url=POST_PROBLEM_URL, 
		callback=function(data){
			data = JSON.parse(data)

			var results = data['data']['data']

			/* Update UL Class .search-result-list
			    <ul class="search-result-list">
			        <li class="search-result-item">
			            <h5 class="search-result-item-title selected"><i class="fas fa-check-circle"></i>Deforestration</h5>
			            <div class="search-result-item-details">
			                <div class="mb-3">
			                    <a href="#" class="a-provided-by">Source: Provided by User</a>
			                </div>
			                <div class="mb-3">
			                    <div><span>Project Number: </span><span>45021-002</span></div>
			                    <div><span>Country: </span><span>People's Repubdivc of China</span></div>
			                    <div><span>Section: </span><span>||. THE PROJECT</span></div>
			                </div>
			                <div>
			                    <span class="badge badge-document">Document RRP</span>
			                </div>
			            </div>
			        </li>

			        ....
			        ....
			*/

			// Clear <ul> body	
			$(".search-result-list").empty();
			
			results.forEach(function(result){
				li_html = 
					   `<li class="search-result-item">
			            <h5 class="search-result-item-title search-problem-result text-capitalize"><i class="far fa-circle"></i>${result.text}</h5>
			            <div class="search-result-item-details">
			                <div class="mb-3">
			                    <a href="${result.link}" target='_blank' class="a-provided-by">Source: ${result.source}</a>
			                </div>
			                <div class="mb-3">
			                    <div><span>Project Number: </span><span>${result.project_no}</span></div>
			                    <div><span>Country: </span><span>${result.country}</span></div>
			                    <div><span>Section: </span><span> ${result.section}</span></div>
			                </div>
			                <div>
			                    <span class="badge badge-document animate-grow">Document ${result.source}</span>
			                </div>
			            </div>
			        </li>`
				
				$(".search-result-list").append(li_html)
			})

			// Update #div-result-header
			result_text = results.length + ' results for ' + keyword
		    $('#div-result-header').text(result_text)


		    $('div.section-container,button.btn-toggle-sidebar').attr({'style': 'display:block;'});

		    $('html,body').animate({
		        scrollTop: $(".btn-open").offset().top
		    },'slow');

		    $(".search-result-item").delay(500).each(function(i) {
		        $(this).delay(300 * i).queue(function() {
		            $(this).addClass("show");
		        });
		    });
		})
}
