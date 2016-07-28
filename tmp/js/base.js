(function(){

  var Content = React.createClass({
    render: function() {
      return (
        <div className="content">
          this is content.
        </div>
      );
    }
  });
  ReactDOM.render(
    <Content />,
    document.getElementById('wrapper')
  );

})();
