using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatExpenses.DbModels;
using FlatExpenses.IRepository;
using MongoDB.Driver;
using FlatExpenses.Models;
using MongoDB.Bson;

namespace FlatExpenses.Repository
{
    public class StudentRepository : IStudentRepository
    {
        private readonly DbContext _context = null;

        public StudentRepository(IOptions<Settings> settings)
        {
            _context = new DbContext(settings);
        }

        public async Task Add(Student student)
        {
            await _context.Students.InsertOneAsync(student);
        }

        public async Task<IEnumerable<Student>> Get()
        {
            return await _context.Students.Find(x => true).ToListAsync();
        }

        public async Task<Student> Get(string id)
        {
            var student = Builders<Student>.Filter.Eq("Id", id);
            return await _context.Students.Find(student).FirstOrDefaultAsync();
        }

        public async Task<DeleteResult> Remove(string id)
        {
            return await _context.Students.DeleteOneAsync(Builders<Student>.Filter.Eq("Id", id));
        }

        public async Task<DeleteResult> RemoveAll()
        {
            return await _context.Students.DeleteManyAsync(new BsonDocument());
        }

        public async Task<string> Update(string id, Student student)
        {
            await _context.Students.ReplaceOneAsync(zz => zz.Id == id, student);
            return "";
        }
    }
}
