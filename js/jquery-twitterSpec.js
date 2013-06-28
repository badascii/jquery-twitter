describe('jquery-twitter', function() {
  it('should fetch JSON', function() {
    $('.grab-tweets').trigger('click');
    waitsFor(function() {
      return $('body').hasClass('.tweets');
    }, "the tweets were not fetched", 1000);


  });
});


var server;

before(function () { server = sinon.fakeServer.create(); });
after(function () { server.restore(); });

it("calls callback with deserialized data", function () {
  var callback = sinon.spy();
  getTodos(42, callback);

  // This is part of the FakeXMLHttpRequest API
  server.requests[0].respond(
    200,
    { "Content-Type": "application/json" },
    JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
  );

  assert(callback.calledOnce);
});
