class Person {
  constructor(name, age, hobbies, isVegan){
    this.name = name
    this.age = age
    this.hobbies = hobbies
    this.isVegan = isVegan
  }
  talk() {
      return `Hillou i am ${this.name}`
  }
}

const teacher = new Person("Ildana", 24, ['coding', 'gaming'], true)  

  describe("Teacher", function(){
    it("Is of legal age", function(){
      expect(teacher.age).toBeGreaterThan(18)
    });
    it("Likes coding", function(){
      expect(teacher.hobbies).toContain('coding')
    });
    it("Does not eat meat", function(){
      expect(teacher.isVegan).toBe(true)
    });
  }); 

