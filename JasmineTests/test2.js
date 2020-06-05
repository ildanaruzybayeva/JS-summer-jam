function add(a,b,c){
      return a+b+c
  }

  describe('say my name', function(){
      var addSpy, result
      beforeEach(function(){
          addSpy = spyOn(window, 'add').and.callThrough();
          result = addSpy(1,2,3)
      })
      it('can have value tested', function(){
          expect(result).toEqual(6)
      })
  })


  
function getUser(name) {
    return fetch('https://api.github.com/users/' + name)
    .then(response => response.json())
  }

  describe('userinfo', function(){
      it('returns ildanas github name', function(done){
          getUser('ildanaruzybayeva').then(function(data){
            expect(data.name).toBe('Ildana');
            done();
          })
      })
  })
