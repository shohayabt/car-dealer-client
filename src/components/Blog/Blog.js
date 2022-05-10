import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="container d-flex-col">
        <div className="qus">
          <h1>Difference between JavaScript and NodeJs?</h1>
          <p>
            <h3>JavaScript:</h3> It is a programming language. We use JS mainly
            to write scripts on a website that makes web pages more dynamic in
            nature. We can only run JS on browsers. It is utilised on the web
            page’s client-side. The JS can easily add HTML and even play with
            the DOM. It runs mainly on the client-side. Thus, it is used in the
            development of the front end.
          </p>
          <p>
            <h3>NodeJS:</h3> It is a runtime environment for Javascript that
            lets a user run this programming language on the server-side as
            well. NodeJS helps us run JS outside the browser as well. It lets us
            use JS on the server-side as well since it works on the server-side.
            Inside Node.JS, we have the JS engine known as V8. It helps in
            parsing and running the JS code. It runs on the server-side. Thus,
            it helps in the server-side development via the JS.
          </p>
        </div>
        <div className="qus">
          <h1>When should you use nodejs and when should you use mongodb?</h1>
          <p>
            NodeJS is a JavaScript runtime environment. It's actually helps
            JavaScript to run outside of server. It's used in server side
            development. But, MongoDB is NoSQL database which is document
            oriented. It represents data as of JSON documents. It's used for
            store data.The summary is MongoDB is a database where we can store
            data and NodeJS helps us to to connect our client site to database
            by it's server site.Suppose you are building a website and you need
            a database to store the data or information so here you can use
            MongoDB but to be connected with MongoDB you need a connector, so
            here you can use NodeJS which will help your website to run outside
            of server.
          </p>
        </div>
        <div className="qus">
          <h1>Differences between sql and nosql databases.</h1>
          <p>
            <h3>SQL: </h3>Databases are categorized as Relational Database
            Management System (RDBMS) SQL databases have fixed or static or
            predefined schema SQL databases display data in form of tables so it
            is known as table-based database. SQL databases are vertically
            scalable. SQL databases use a powerful language "Structured Query
            Language" to define and manipulate the data. SQL databases are best
            suited for complex queries.
          </p>
          <p>
            <h3>NoSQL:</h3>
            NoSQL databases are categorized as Non-relational or distributed
            database system. NoSQL databases have dynamic schema. NoSQL
            databases display data as collection of key-value pair, documents,
            graph databases or wide-column stores. NoSQL databases are
            horizontally scalable. In NoSQL databases, collection of documents
            are used to query the data. It is also called unstructured query
            language. It varies from database to database. NoSQL databases are
            not so good for complex queries because these are not as powerful as
            SQL queries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
