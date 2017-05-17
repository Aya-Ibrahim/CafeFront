package beans;
// Generated Apr 26, 2017 2:26:31 AM by Hibernate Tools 4.3.1


import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * Transaction generated by hbm2java
 */
@Entity
@Table(name="transaction"
    ,catalog="arkancafe"
)
public class Transaction  implements java.io.Serializable {


     private Integer txId;
     private Ingredient ingredient;
     private long quantity;
     private Date date;
     private Set orderses = new HashSet(0);
     private TxAdjustment txAdjustment;

    public Transaction() {
    }

	
    public Transaction(Ingredient ingredient, long quantity, Date date) {
        this.ingredient = ingredient;
        this.quantity = quantity;
        this.date = date;
    }
    public Transaction(Ingredient ingredient, long quantity, Date date, Set orderses, TxAdjustment txAdjustment) {
       this.ingredient = ingredient;
       this.quantity = quantity;
       this.date = date;
       this.orderses = orderses;
       this.txAdjustment = txAdjustment;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="tx_id", unique=true, nullable=false)
    public Integer getTxId() {
        return this.txId;
    }
    
    public void setTxId(Integer txId) {
        this.txId = txId;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="ing_id", nullable=false)
    public Ingredient getIngredient() {
        return this.ingredient;
    }
    
    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    
    @Column(name="quantity", nullable=false, precision=10, scale=0)
    public long getQuantity() {
        return this.quantity;
    }
    
    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="Date", nullable=false, length=19)
    public Date getDate() {
        return this.date;
    }
    
    public void setDate(Date date) {
        this.date = date;
    }

@ManyToMany(fetch=FetchType.LAZY, mappedBy="transactions")
    public Set getOrderses() {
        return this.orderses;
    }
    
    public void setOrderses(Set orderses) {
        this.orderses = orderses;
    }

@OneToOne(fetch=FetchType.LAZY, mappedBy="transaction")
    public TxAdjustment getTxAdjustment() {
        return this.txAdjustment;
    }
    
    public void setTxAdjustment(TxAdjustment txAdjustment) {
        this.txAdjustment = txAdjustment;
    }




}

