/*
JS Script to update problem tree UI given:

 data = {
    'cause': <list of causes>,
    'problem': <list of problems>,
    'effect': <list of effects>,
    'keyword': <input of user from the searh page>
}
*/

function get_card_html(text, type, idx){
	card_html = `<li class="list-group-item ${type}-line" id="${type}${idx}">
                    <span class="data-view text-capitalize" data-group="problem" data-value="${text}">${text}</span>
                    <span class="float-right">
                        <button class="btn-edit">
                            <i class="fas fa-pencil-alt"></i>
                        </button> 
                        <button class="btn-delete">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </span>
                </li>`
    return card_html
}

function update_problem_tree(data){

	$('.card.cause').find('li').remove()
	$('.card.problem').find('li').remove()
	$('.card.effect').find('li').remove()
	
	causes = Object.values(data['cause'])
	causes.forEach(function(cause, idx){
		$('.card.cause').find('ul').append(get_card_html(cause, 'cause', idx))
	})

	effects = Object.values(data['effect'])
	effects.forEach(function(effect, idx){
		$('.card.effect').find('ul').append(get_card_html(effect, 'effect', idx))
	})	

	problems = Object.values(data['problem'])
	problems.forEach(function(problem, idx){
		$('.card.problem').find('ul').append(get_card_html(problem, 'problem', idx))
	})
}