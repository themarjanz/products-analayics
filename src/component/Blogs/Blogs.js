import React from "react";

const Blogs = () => {
  return (
    <div className="blogs-area">
      <h3 className="text-3xl mb-5 text-orange-400 font-bold">1.What is context api?</h3>
      <p className="text-2xl mb-8">
        React Context is a method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.
      </p>
      <h3 className="text-3xl mb-5 text-orange-400 font-bold">2.what is semantic tag?</h3>
      <p className="text-2xl mb-8">
        semantic elements = elements with a meaning Semantic HTML elements are
        those that clearly describe their meaning in a human- and
        machine-readable way and its meaning to both the browser and the
        developer. examples of non-semantic elements div and span tag tells
        nothing about its content. examples of semantic elements form tag,table
        tag and article tag clearly defines its content.
      </p>
    </div>
  );
};

export default Blogs;
