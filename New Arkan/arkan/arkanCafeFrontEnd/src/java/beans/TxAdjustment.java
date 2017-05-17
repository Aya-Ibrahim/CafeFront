package beans;
// Generated Apr 26, 2017 2:26:31 AM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

/**
 * TxAdjustment generated by hbm2java
 */
@Entity
@Table(name="tx_adjustment"
    ,catalog="arkancafe"
)
public class TxAdjustment  implements java.io.Serializable {


     private int txId;
     private Transaction transaction;
     private long availableQty;

    public TxAdjustment() {
    }

    public TxAdjustment(Transaction transaction, long availableQty) {
       this.transaction = transaction;
       this.availableQty = availableQty;
    }
   
     @GenericGenerator(name="generator", strategy="foreign", parameters=@Parameter(name="property", value="transaction"))@Id @GeneratedValue(generator="generator")

    
    @Column(name="tx_id", unique=true, nullable=false)
    public int getTxId() {
        return this.txId;
    }
    
    public void setTxId(int txId) {
        this.txId = txId;
    }

@OneToOne(fetch=FetchType.LAZY)@PrimaryKeyJoinColumn
    public Transaction getTransaction() {
        return this.transaction;
    }
    
    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }

    
    @Column(name="available_qty", nullable=false, precision=10, scale=0)
    public long getAvailableQty() {
        return this.availableQty;
    }
    
    public void setAvailableQty(long availableQty) {
        this.availableQty = availableQty;
    }




}


