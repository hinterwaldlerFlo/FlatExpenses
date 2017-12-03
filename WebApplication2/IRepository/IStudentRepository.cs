using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;

namespace WebApplication2.IRepository
{
    public interface IStudentRepository
    {
        Task<IEnumerable<Student>> Get();
        Task<Student> Get(string id);
        Task Add(Student Student);
        Task<string> Update(string id, Student Student);
        Task<DeleteResult> Remove(string id);
        Task<DeleteResult> RemoveAll();
    }
}
