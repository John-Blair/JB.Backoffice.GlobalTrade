using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JB.Backoffice.GlobalTrade
{
    public interface IRepository<TEntity, TKey> where TEntity:class
    {

        IEnumerable<TEntity> GetAll();
        TEntity Get(TKey id);

        IQueryable<TEntity> Query { get; }

        void Update(TEntity item);
        TEntity Create(TEntity item);
        void Delete(TKey id);

        bool Exists(TKey id);

    }
}
