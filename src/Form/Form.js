import React from "react";
// import Form from 'react-bootstrap/Form'

export function FormOne() {
  const {userId, title, body} = this.state;
  return (
    <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="number"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">push</button>
        </form>
    
  );
}
