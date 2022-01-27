using AppBank.DomainModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppBank.DataAccessLayer.Repositories
{
    /// <summary>
    /// Repository Pattern 
    /// https://docs.microsoft.com/fr-fr/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design
    /// Types génériques : https://devstory.net/10461/csharp-generic 
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IRepository<T> where T : Model 
    {
        /// <summary>
        /// Create a new item a save it in database
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        T Create(T entity);

        /// <summary>
        /// Update an existing item and save it in database
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        T Update(T entity);

        /// <summary>
        /// Get all rows from current table
        /// </summary>
        /// <returns></returns>
        IQueryable<T> GetAll();

        /// <summary>
        /// Get a single row from database using IDentifier
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        T? GetById(int id);

        /// <summary>
        /// Delete a single row using IDentifier
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        bool Delete(int id);

        /// <summary>
        /// Get all rows matching predicate
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        IQueryable<T> Search(Predicate<T> predicate);
    }
}
