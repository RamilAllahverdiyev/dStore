let updateBtns = document.getElementsByClassName('update-cart')

for(let i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        let productId = this.dataset.product
        let action = this.dataset.action
        console.log(productId + action)
        console.log(user)
        if(user === 'AnonymousUser'){
            console.log("Not loged in")
        }else{
            updateUserOrder(productId, action)
        }
    })
}


function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...')

		var url = '/update_item/'

		fetch(url, {
			method:'POST',
			headers:{
				'Content-Type':'application/json',
				'X-CSRFToken':csrftoken,
			}, 
			body:JSON.stringify({'productId':productId, 'action':action})
		})
		.then((response) => {
		   return response.json();
		})
		.then((data) => {
		    console.log(data)
            location.reload()
		});
}