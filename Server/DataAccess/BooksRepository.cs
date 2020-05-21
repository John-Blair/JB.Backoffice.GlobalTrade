using System;
using System.Collections.Generic;
using System.Linq;
using Umbraco.Core;
using Umbraco.Core.Composing;
using Umbraco.Core.Persistence;
using Umbraco.Core.Scoping;

namespace JB.Backoffice.GlobalTrade
{
    public class BooksRepository :  IBooksRepository
    {
        public BooksRepository()
        {
        }
        public IQueryable<Book> Query
        {
            get
            {
                return GetAll().AsQueryable();
            }
        }

        public Book Create(Book item)
        {
            using (var scope = Current.ScopeProvider.CreateScope(autoComplete: true))
            {
                scope.Database.Insert(item);
            }
            return item;
        }

        public void Delete(int id)
        {
            using (var scope = Current.ScopeProvider.CreateScope(autoComplete: true))
            {
                scope.Database.Delete<Book>(id);
            }
        }

        public bool Exists(int id)
        {
            return Query.Where( item => item.Id == id).Count() > 0;
        }

        public Book Get(int id)
        {
            return Query.Where(item => item.Id == id).FirstOrDefault();
        }

        public IEnumerable<Book> GetAll()
        {
            using (var scope = Current.ScopeProvider.CreateScope(autoComplete: true))
            {
                var sql = $"select * from {DatabaseConstants.BookTable} order by id";

                return scope.Database.Fetch<Book>(sql);
            }
        }

        public void Update(Book item)
        {
            using (var scope = Current.ScopeProvider.CreateScope(autoComplete: true))
            {
                scope.Database.Update(item);
            }
        }

        
    }
}
