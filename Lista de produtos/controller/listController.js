class ListController {
    constructor(formId, tableId) {
        this.formElement = document.getElementById(formId)
        this.tableElement = document.getElementById(tableId)

        this.preventEvent()
    }

    preventEvent() {
       this.formElement.addEventListener("submit", event => {
    
            event.preventDefault();
        
            let user = this.submit()

            this.addLine(user)
        }) 
        
    }

    submit() {

        let user = {};

        [...this.formElement.elements].forEach(field => user[field.name] = field.value)

        return new User(user.name, user.price, user.expiration);
    }

    addLine(dataUser) {

        this.tableElement.innerHTML = `<tr>
        <th>${dataUser.name}</th>
        <th>${dataUser.price}</th>
        <th>${dataUser.expiration}</th>
        <td>
            <button class="delete-student">Delete</button>
            <button class="edit-student">Edit</button>
        </td>
    </tr>`
    
    }
}