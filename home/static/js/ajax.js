
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

let btn = document.querySelector('#heartIcon')
let post_id = "{{ post.id}}"




btn.addEventListener("click", likePost)
    function likePost(e){
        alert(" veuillez vous connectez si vous voulez aimer le post")
    }


    
let comment = document.querySelector('#comment')

comment.addEventListener("click" , commentPost)
     function commentPost(e){
        alert("connetez-vous pour faire des commentaires")
     }
        



